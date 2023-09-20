import "./App.css";

import img10 from "./Assets/Component 10.png";

import ellipse from "./Assets/Ellipse 1.png";

import ellipse1 from "./Assets/Ellipse 2.png";
import ellipse2 from "./Assets/Ellipse 3.png";

import img12 from "./Assets/Rectangle 80.png";

import img13 from "./Assets/Rectangle 81.png";

import img11 from "./Assets/Component 11.png";
import com_1 from "./Assets/Component 1.png";
import com_4 from "./Assets/Component 4.png";

import img2 from "./Assets/Ellipse 13.png";

import NIL_logo from "./Assets/NIL_logo_Transparent (1) 1 (1).png";

import img3 from "./Assets/Ellipse 14.png";

import img4 from "./Assets/Ellipse 15.png";

import MC from "./Assets/Ellipse 16.png";

import vector from "./Assets/Vector 1.png";

import { CiUser } from "react-icons/ci";

import { MdOutlineLocalPhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";

import { BsTelephone } from "react-icons/bs";

import { AiFillStar, AiOutlineMenu } from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <nav>
        <img src={img10} alt="logo" width="100px" height="30px" />
        <AiOutlineMenu />
        <div className="nc hid">
          <p>Home</p>
          <p>Health conditions</p>
          <p className="b">Lab tests</p>
          <p>Medicines</p>
        </div>
        <div className="hid">
          <button className="btn">For patients</button>
          <button className="btn">For hospitals</button>
        </div>

        <img
          src={img11}
          alt="logo"
          width="85px"
          height="20px"
          className="hid"
        />
      </nav>
      <div className="header">
        <div className="f_c o_4">
          <form>
            <center>
              <h6>Fill in the details to get a call!</h6>
            </center>
            <div>
              <CiUser style={{ color: "blue", marginRight: "10px" }} />
              <input className="in" type="text" placeholder="Full name" />
            </div>

            <br />
            <div>
              <MdOutlineLocalPhone
                style={{ color: "blue", marginRight: "10px" }}
              />
              <input className="in" type="phone" placeholder="Phone number" />
            </div>

            <br />
            <div>
              <GoLocation style={{ color: "blue", marginRight: "10px" }} />
              <input type="text" className="in" placeholder="Location" />

              <br />
            </div>
            <div className="checkbox_container">
              <input type="checkbox" className="ch" />
              <p className="ch_p">
                By countinuing, you agree to our T&C and privacy policy
              </p>
            </div>
            <center>
              <button className="form_btn">Proceed</button>
            </center>
          </form>
          <div className="pos1 o_3">
            <div className="pos">
              <button className="price_btn_1">70% OFF</button>
              <button className="price_btn">
                Get a Full Body Checkup Now at
                <span className="overthrow s"> ₹5,999</span> ₹999
              </button>
            </div>
          </div>
        </div>

        <div className="img_con">
          <img
            src={com_1}
            alt="Lab_test"
            width="100%"
            height="200px"
            className="lab_img hid"
          />
          <h3 className="o_1">
            <span>Best in class</span> lab tests!
          </h3>
          <img
            src={vector}
            alt="vector"
            width="120px"
            height="10px"
            className="o_2"
          />
          <div className="ellipse hid">
            <li className="ellipse_con e_l">
              <img src={ellipse} alt="sample_test" width="17px" height="17px" />
              <p className="ellipse_para">
                Timely sample
                <br />
                collection
              </p>
            </li>
            <li className="ellipse_con e_l2">
              <img
                src={ellipse1}
                alt="sample_test"
                width="17px"
                height="17px"
              />
              <p className="ellipse_para">
                Complementary
                <br />
                report consultation
              </p>
            </li>
            <li className="ellipse_con e_l1">
              <img
                src={ellipse2}
                alt="sample_test"
                width="17px"
                height="17px"
              />
              <p className="ellipse_para">
                Accurate timely
                <br />
                reports
              </p>
            </li>
          </div>
        </div>
      </div>

      <div className="u_L">
        <div className="u_l">
          <img src={img12} alt="MC_logo" width="30px" height="30px" />
          <h6>NABL Accredited Labs</h6>
        </div>

        <div className="u_l">
          <img src={img13} alt="MC_logo" width="30px" height="30px" />
          <h6>Free sample collection</h6>
        </div>
      </div>

      <center>
        <h4>
          We keep <span>expanding</span>!
        </h4>
      </center>

      <ul className="count">
        <li className="Count_con">
          <p className="head">5+</p>
          <p className="para">Labs</p>
        </li>
        <li className="Count_con">
          <p className="head">100+</p>
          <p className="para">
            Collection <br /> centers
          </p>
        </li>
        <li className="Count_con">
          <p className="head">1000+</p>
          <p className="para">Monthly tests</p>
        </li>
        <li className="Count_con">
          <p className="head">2200</p>
          <p className="para">Test menu</p>
        </li>
        <li className="Count_con">
          <p className="head">5+</p>
          <p className="para">Cities present in</p>
        </li>
      </ul>
      <center>
        <h4>
          Top <span>packages</span>
        </h4>
      </center>
      <center>
        <p className="p">
          Explore our wide range of tests! We ensure that you don't miss out on
          any
          <br />
          chance to keep yourself healthy.
        </p>
      </center>
      <ul className="price_con">
        <li className="price_Con">
          <p className="price_head">
            Basic Full Body <br />
            Checkup
          </p>
          <div className="rating_con">
            <p>4.3</p>
            <AiFillStar
              style={{
                color: "yellow",
                marginTop: "10px",
                marginRight: "7px",

                fontSize: "12px",
              }}
            />
            <p className="review">( 75 Reviews )</p>
          </div>
          <p>Number of tests - 53</p>
          <div className="price">
            <p className="review">MRP:</p>
            <p className="review overthrow"> ₹10,000</p>
            <p> ₹8,490</p>
          </div>
          <center>
            <button className="form_btn">Book now</button>
          </center>
        </li>
        <li className="price_Con">
          <p className="price_head">
            Basic Full Body <br />
            Checkup
          </p>
          <div className="rating_con">
            <p>4.3</p>
            <AiFillStar
              style={{
                color: "yellow",
                marginTop: "10px",
                marginRight: "7px",

                fontSize: "12px",
              }}
            />
            <p className="review">( 75 Reviews )</p>
          </div>
          <p>Number of tests - 53</p>
          <div className="price">
            <p className="review">MRP:</p>
            <p className="review overthrow"> ₹10,000</p>
            <p> ₹8,490</p>
          </div>
          <center>
            <button className="form_btn">Book now</button>
          </center>
        </li>
        <li className="price_Con">
          <p className="price_head">
            Basic Full Body <br />
            Checkup
          </p>
          <div className="rating_con">
            <p>4.3</p>
            <AiFillStar
              style={{
                color: "yellow",
                marginTop: "10px",
                marginRight: "7px",

                fontSize: "12px",
              }}
            />
            <p className="review">( 75 Reviews )</p>
          </div>
          <p>Number of tests - 53</p>
          <div className="price">
            <p className="review">MRP:</p>
            <p className="review overthrow"> ₹10,000</p>
            <p> ₹8,490</p>
          </div>
          <center>
            <button className="form_btn">Book now</button>
          </center>
        </li>
      </ul>
      <center>
        <h4>
          Why <span>choose</span> us ?
        </h4>
      </center>
      <center>
        <p className="p">
          we want you and your heart to be healthy so you can live a<br />
          happy life!
        </p>
      </center>
      <div className="bt_bg">
        <div className="bt">
          <div className="bt_C">
            <li className="bt_l">
              <h6>
                NABL Accredited <br />
                Labs
              </h6>
              <p className="bt_para">
                Get accurte and safe results
                <br />
                from our NABL-certified lab
                <br />
                partners.
              </p>
            </li>
            <img
              className="bt_c"
              src={MC}
              alt="MC_logo"
              width="60px"
              height="66px"
            />
          </div>
          <div className="bt_C">
            <li className="bt_l">
              <h6>
                Timely
                <br />
                Collections
              </h6>
              <p className="bt_para">
                We collect samples timely
                <br />
                to prevent treatment delays
                <br />
                and ensure your continued
                <br />
                well-being.
              </p>
            </li>
            <img
              className="bt_c"
              src={img2}
              alt="docter_img"
              width="60px"
              height="66px"
            />
          </div>
        </div>
        <div className="bt">
          <div className="bt_C bt_bt">
            <li className="bt_l">
              <h6>
                Value <br />
                experience
              </h6>
              <p className="bt_para">
                Experience seamless care without
                <br />
                the hassle of waiting in long lines
                <br />
                for an appointment. Book with us <br />
                for a healthier lifestyle.
              </p>
            </li>
            <img
              className="bt_c"
              src={img3}
              alt="docter_img"
              width="60px"
              height="66px"
            />
          </div>

          <div className="bt_C">
            <li className="bt_l">
              <h6>Transparency</h6>
              <p className="bt_para">
                Enjoy hassle free medical
                <br />
                assistance with our transparent
                <br />
                approach. We prioritize
                <br />
                transparency for your smooth
                <br />
                medical journey.
              </p>
            </li>
            <img
              className="bt_c"
              src={img4}
              alt="docter_img"
              width="60px"
              height="66px"
            />
          </div>
        </div>
      </div>
      <div className="l_b">
        <div className="lower_con">
          <div>
            <img src={NIL_logo} alt="NIL_logo" width="50px" height="50px" />
            <p className="p_s">
              Book docter appointments online and get
              <br />
              your ailments treated in no time with our
              <br />
              expert medical support systems. Get rid of all
              <br />
              your medical problem with our expert panel of
              <br />
              docters who guide you towards a healthier life.
            </p>
            <div className="ph_c1 hid">
              <div className="ph_c">
                <p className="fw">+91 |</p>
              </div>
              <div className="ph_logo">
                <BsTelephone style={{ color: "white" }} />
              </div>
            </div>
          </div>
          <div className="lo_c">
            <div className="L-li">
              <h6>Services</h6>
              <div className="l_li">
                <p>Appointments</p>
                <p>Lab tests</p>
                <p>A-Z medicine</p>
                <p>Docter support</p>
              </div>
            </div>
            <div className="L-li">
              <h6>Legal</h6>
              <div className="l_li">
                <p>General info</p>
                <p>Privacy policy</p>
                <p>Terms of services</p>
                <p>Consultation</p>
                <p>How it works</p>
              </div>
            </div>
            <div className="L-li">
              <h6>Talk to us</h6>
              <div className="l_li">
                <p>support@notinline.com</p>
                <p>appointment@notinline.com</p>
                <p>+91 12345 67899</p>
                <p>+91 97642 09752</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="c_i">
          <img src={com_4} alt="c_icon" width="10px" height="10px" />
          <p className="ci">2021-2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default App;
