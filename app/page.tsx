import Image from "next/image";
import styles from "./page.module.css";
import profilePic from "../public/photos/photo1.jpg";
import Banner from "../public/photos/photo2.jpg";
import Link from "next/link";
import Bed from "../public/icons/king_bed_black_24dp.svg";
import Coach from "../public/icons/weekend_black_24dp.svg";
import Kitchen from "../public/icons/kitchen_black_24dp.svg";
import Diningroom from "../public/icons/flatware_black_24dp.svg";
import Bathrooms from "../public/icons/bathtub_black_24dp.svg";
import Parking from "../public/icons/local_parking_black_24dp.svg";
import Pool from "../public/icons/pool_black_24dp.svg";

export default function Home() {
  return (
    <main>
      <div className="section">
        <div>
          <h1>Casa completa</h1>
          <h2>Mérida, Yucatán</h2>
        </div>
        <div className="summary">
          <a href={"#bedrooms"} className="item">
            <div>
              <Image src={Bed} alt="bed icon" />
            </div>
            <div>recamaras (3)</div>
          </a>
          <a href={"#livingroom"} className="item">
            <div>
              <Image src={Coach} alt="bed icon" />
            </div>
            <div>sala (1)</div>
          </a>
          <a href={"#kitchen"} className="item">
            <div>
              <Image src={Kitchen} alt="bed icon" />
            </div>
            <div>cocina (1)</div>
          </a>
          <a href={"#diningroom"} className="item">
            <div>
              <Image src={Diningroom} alt="bed icon" />
            </div>
            <div>comedor (1)</div>
          </a>
          <a href={"#bathrooms"} className="item">
            <div>
              <Image src={Bathrooms} alt="bed icon" />
            </div>
            <div>baños (3)</div>
          </a>
          <div className="item">
            <div>
              <Image src={Parking} alt="bed icon" />
            </div>
            <div>estacionamiento (1)</div>
          </div>
          <div className="item">
            <div>
              <Image src={Pool} alt="bed icon" />
            </div>
            <div>Alberca (1)</div>
          </div>
        </div>
        <Image
            src={Banner}
            alt="Picture of the author"
            width={606.625}
            height={404.375}
        />
        <div id="bedrooms" className="room">
          <h3>Recamaras (3)</h3>
          <div>
            <div>
              <p>Recamara secundaria planta baja</p>
              <ul>
                <li>
                  Cama individual {"("}1{")"}
                </li>
              </ul>
            </div>
            <div>
              <p>Recamara principal planta alta</p>
              <ul>
                <li>
                  Cama matrimonial {"("}1{")"}
                </li>
                <li>Baño completo</li>
              </ul>
            </div>
            <div>
              <p>Recamara secundaria planta baja</p>
              <ul>
                <li>
                  Cama individual {"("}2{")"}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="livingroom" className="room">
          <h3>Sala</h3>
        </div>
        <div id="diningroom" className="room">
          <h3>Comedor</h3>
          con mesa y 6 sillas
        </div>
        <div id="kitchen" className="room">
          <h3>Cocina</h3>
          Estufa Refrigerador Fregadero Cafetera
        </div>
        <div id="pool" className="room">
          <h3>Alberca</h3>
        </div>
        <div className="room">
          <h3>Patio trasero</h3>
        </div>
        <div className="room">
          <h3>Otras comodidades</h3>
          <ul>
            <li>Frente a la alberca</li>
            <li>Toallas</li>
            <li>Privada con vigilancia</li>
            <li>Wifi</li>
            <li>Detector de humo</li>
          </ul>
        </div>
        <div className="room">
          <h3>Atracciones</h3>
        </div>
      </div>

      <div id="reel" className="section reel">
        <div className="image-container">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="image-container">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
        <div className="image-container">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={300}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
