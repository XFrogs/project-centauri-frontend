import { useState, useEffect, useMemo } from "react";
import { baseURL } from "../../../images.js";
import "./home.scss";
import { Link } from "react-router-dom";
import NftCard from "../../cards/nftcard";
import * as anchor from "@project-serum/anchor";
import { Provider } from "@project-serum/anchor";
import Wallet from "@project-serum/sol-wallet-adapter";
import * as serumCmn from "@project-serum/common";
import { PublicKey, Connection } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import TechButton from "./techButton";
import * as web3 from "@solana/web3.js";
import hero from "./hero.png";
import banner from "./banner.png";
import idl from "../../idl/centuri.json";
import wide5_cyan from "./wide5_cyan.jpg";
import wide5_green from "./wide5_green.jpg";
import wide5_orange from "./wide5_orange.jpg";
import start from "./start.png";
import end from "./end.png";
import inq from "./inq.gif";
// import banner from '../../../media/banner.png';
import fight from "./fight.mp4";
import axios from "axios";

// const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID: PublicKey = new PublicKey(
//   "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
// );

// async function findAssociatedTokenAddress(
//   walletAddress: PublicKey,
//   tokenMintAddress: PublicKey
// ): Promise<PublicKey> {
//   return (
//     await PublicKey.findProgramAddress(
//       [
//         walletAddress.toBuffer(),
//         TOKEN_PROGRAM_ID.toBuffer(),
//         tokenMintAddress.toBuffer(),
//       ],
//       SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
//     )
//   )[0];
// }

const UpcomingCard = (props) => {
  return (
    <div className="box has-background-dark2">
      <h1 className="subtitle has-text-left has-text-white">{props.title}</h1>
      <br />
      <h1 className="subtitle has-text-left has-text-white">
        prize pool ${props.price}
      </h1>
    </div>
  );
};
const BUTTON_STATE = ["FIGHT", "CANCLE", "IN MATCH", "CLAIM"];

const MODEL_ARRAY = [wide5_cyan, wide5_green, wide5_orange];
const Home = (props) => {
  //const [isConnected, setIsConnected] = useState(false);
  const [buttonState, setButtonState] = useState(0);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [src, setSrc] = useState(MODEL_ARRAY[0]);
  const [heros, setHeros] = useState([]);
  const [state, setState] = useState("FIGHT");

  // //mint and programid here
  // const mint = "6dh3fAW62xY1NMLT1Jr81eozRyRkuep9JK1bHeCpEaDy";
  // const programId = new anchor.web3.PublicKey(
  //   "3S8UfoyVCQzUaP6shDqtGiKZuuPcMNPbNpeMQGKPSS6g"
  // );

  // const [provider, wallet, connection] = useMemo(() => {
  //   const opts: ConfirmOptions = {
  //     preflightCommitment: "recent",
  //     commitment: "recent",
  //   };
  //   const network = "http://127.0.0.1:8899";
  //   const wallet = new Wallet("https://www.sollet.io", network);
  //   const connection = new Connection(network, opts.preflightCommitment);

  //   const provider = new Provider(connection, wallet, {
  //     preflightCommitment: "recent",
  //     commitment: "recent",
  //   });
  //   return [provider, wallet, connection];
  // }, []);

  // //program id here please

  //const program = new anchor.Program(idl, programId, provider);

  const toggleState = async () => {
    // // web3 -  make a vault
    // if (!isConnected) {
    //   wallet.connect();
    //   return;
    // }

    // let matchinfo = web3.Keypair.generate();
    // let vault = web3.Keypair.generate();
    // let matchinfoSigner = null;
    // let _mint = new PublicKey(mint);
    // let token_pub = await findAssociatedTokenAddress(wallet.publicKey, _mint);

    // let [_matchinfoSigner, nonce] =
    //   await anchor.web3.PublicKey.findProgramAddress(
    //     [matchinfo.publicKey.toBuffer()],
    //     programId
    //   );
    // matchinfoSigner = _matchinfoSigner;
    // // original_amount = new anchor.BN(10000000000000)
    // let test_ammount = new anchor.BN(100);

    // await program.rpc.createMatchinfo(test_ammount, nonce, {
    //   accounts: {
    //     matchinfo: matchinfo.publicKey,
    //     vault: vault.publicKey,
    //     matchinfoSigner,
    //     from: token_pub,
    //     owner: program.provider.wallet.publicKey,
    //     tokenProgram: TOKEN_PROGRAM_ID,
    //     rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    //   },
    //   signers: [matchinfo, vault],
    //   instructions: [
    //     await program.account.matchinfo.createInstruction(matchinfo, 300),
    //     ...(await serumCmn.createTokenAccountInstrs(
    //       program.provider,
    //       vault.publicKey,
    //       _mint,
    //       matchinfoSigner
    //     )),
    //   ],
    // });

    // //winner gonna need this things

    // console.log(
    //   matchinfo.publicKey,
    //   vault.publicKey,
    //   matchinfoSigner,
    //   program.provider.wallet.publicKey,
    //   TOKEN_PROGRAM_ID
    // );

    //console.log(resNextId);

    //reciver code

    // //valut 1;
    // await program.rpc.cashCheck({
    //   accounts: {
    //     check: check.publicKey,
    //     vault: vault.publicKey,
    //     checkSigner: checkSigner,
    //     to: receiver,
    //     owner: program.provider.wallet.publicKey,
    //     tokenProgram: TOKEN_PROGRAM_ID,
    //   },
    // });
    //valut 1;

    // await make_a_vault{
    //   key : "player 1"
    // }

    //wins = playert 1 keu dn player 2 key
    // await program.rpc.cashCheck({
    //   accounts: {
    //     key: "Player 1",
    //   },
    // });
    // await program.rpc.cashCheck({
    //   accounts: {
    //     key: " pllyaer 2",
    //   },
    // });
    // player1 == fight
    // q  == cancel
    // mathced == inmatch
    // over  ==  claim.
    const getID = await axios.get("http://localhost:5000/nextid");
    console.log(getID);
    const ID = getID.data.nextId;
    console.log(ID);
    if (ID == 2) {
      setState("IN MATCH");
    }
    const resNextId = axios.post("http://localhost:5000/pushPlayer", {
      id: ID,
      address: `Player ${ID}`,
      key: "publikc addrees",
    });

    // axios.get("http://localhost:5000/getplayer", {
    //   id: ID == 1 ? 2 : 1,
    // });
    if (buttonState == 0) {
      setButtonState(1);
      //setState("CANCLE");
    } else {
      setButtonState(0);
    }

    //window.setTimeout(onClaim, 5000);
  };
  const getScreen = () => {
    console.log(state);
    if (state == "FIGHT") {
      return <img src={start} />;
    } else if (state == "CANCLE") {
      return <img src={inq} />;
    } else if (state == "CLAIM") {
      return <img src={end} />;
    } else if (state == "IN MATCH") {
      return (
        <iframe
          className="has-ratio"
          width="640"
          height="360"
          src={fight}
          title="Unreal Stream"
          frameBorder="0"
          allowfullscreen=""
          controls="0"
          autoplay="0"
          frameborder="0"
          scrolling="no"
          //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }

    // <iframe
    //   className="has-ratio"
    //   width="640"
    //   height="360"
    //   src="https://www.youtube.com/embed/shqMtDv4uS8"
    //   title="YouTube video player"
    //   frameBorder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
    // ></iframe>;

    /* <img src={end} /> */
  };

  const onClaim = () => {
    setState("CLAIM");
    console.log("Claim");
  };

  useEffect(() => {
    //fetch upcoming matches

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setUpcomingMatches(res.data.slice(0, 15)))
      .then((err) => console.log(err));

    //fetch heros

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setHeros(res.data.slice(0, 4)))
      .then((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   wallet.on("connect", () => {
  //     setIsConnected(true);
  //   });
  //   wallet.on("disconnect", () => {
  //     setIsConnected(false);
  //   });
  // }, [wallet]);
  const changeModelFront = () => {
    console.log("Front");
    console.log(MODEL_ARRAY.indexOf(src));
    if (MODEL_ARRAY.indexOf(src) == 2) {
      setSrc(MODEL_ARRAY[-1]);
      return;
    }
    //console.log(MODEL_ARRAY.indexOf(src));
    setSrc(MODEL_ARRAY[MODEL_ARRAY.indexOf(src) + 1]);
  };
  const changeModelBack = () => {
    console.log("Back");
    setSrc(MODEL_ARRAY[MODEL_ARRAY.indexOf(src) - 1]);
  };
  return (
    <div>
      {/* Banner */}
      <section className="hero is-medium has-cool-gradient bg-img herop">
        <div className="hero-body "></div>

        <div className="hero-foot pb-6" style={{ height: "400px" }}>
          <div className="container has-text-centered pb-6">
            <h1
              className="title is-1 has-text-centered has-text-white has-text-weight-bold"
              style={{ fontSize: "3.5rem" }}
            >
              Fight for freedom. Quit your job.
            </h1>
            <h1
              className="subtitle is-3 has-text-white mt-3 is-hidden-touch"
              style={{ fontSize: "2.5rem" }}
            >
              Own a fighter, participate in fight, earn freedom.
            </h1>
          </div>
        </div>

        <div className="banner-tint"></div>
      </section>

      <hr className="p-0 m-0" style={{ background: "#2e3b4a" }} />

      <section className="block has-text-centered p-6 has-background-dark mb-0">
        <div className="container video-div" style={{ zIndex: "11" }}>
          <div className="columns">
            {/* livestreaming */}
            <div className="column">
              <figure className="image is-16by9">
                {getScreen()}
                {/* <img src={inq} /> */}
                {/* <iframe
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/shqMtDv4uS8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
                {/* <img src={end} /> */}
              </figure>
            </div>

            {/* current match info */}
            <div className="column is-3 has-text-centered">
              <div
                className="box has-background-dark is-flex is-flex-direction-column is-justify-content-center "
                style={{ height: "100%" }}
              >
                {buttonState == 0 ? (
                  <img
                    src={src}
                    className="is-flex-grow-1 p-3"
                    style={{ borderRadius: "20px" }}
                  />
                ) : (
                  <div className="box has-background-dark2 is-flex-grow-1">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div class="lds-ellipsis">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <h1 className="subtitle has-text-white is-4">
                      Searching...
                    </h1>
                  </div>
                )}
                <div>
                  <div class="center" style={{ display: "flex" }}>
                    <button
                      class="raise"
                      style={{ justifyContent: "center", width: 10 }}
                      onClick={changeModelBack}
                    ></button>
                    <button
                      class="raise"
                      currentState={buttonState}
                      onClick={toggleState}
                      disabled={false}
                    >
                      {buttonState == 0 ? "Fight" : " Cancel"}
                    </button>
                    <button
                      class="raise"
                      style={{ justifyContent: "center", width: 10 }}
                      onClick={changeModelFront}
                    ></button>
                  </div>
                </div>
                {/* <TechButton
                  currentState={buttonState}
                  onClick={toggleState}
                  disabled={false}
                >
                  {buttonState == 0 ? "Fight" : " Cancel"}
                </TechButton> */}
              </div>
            </div>
          </div>

          {/* comming matches */}
          <div className="py-6">
            <h1 className="title has-text-left has-text-white">
              Upcoming matches
            </h1>
            <div className="columns is-mobile" style={{ overflowX: "scroll" }}>
              {upcomingMatches.map((match, i) => (
                <div
                  className="column is-desktop is-2"
                  key={i}
                  style={{ minWidth: "200px !important" }}
                >
                  <UpcomingCard
                    title={match.title.substr(0, match.title.indexOf(" "))}
                    price={Math.floor(Math.random() * 30) + 10}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="p-0 m-0" style={{ background: "#2e3b4a" }} />

      {/* HEROs */}
      <section className="block has-text-centered p-6 has-background-dark mb-0">
        <div className="container">
          <h1 className="title has-text-white mb-6">Heros</h1>

          <div className="columns">
            {heros.map((hero, i) => (
              <div className="column is-desktop" key={i}>
                <NftCard name={hero.username} price={hero.id} />
              </div>
            ))}
          </div>

          <Link to="/marketplace" className="button is-primary is-outlined">
            Go to marketplace
          </Link>
        </div>
      </section>

      <hr className="p-0 m-0" style={{ background: "#2e3b4a" }} />
    </div>
  );
};

export default Home;
