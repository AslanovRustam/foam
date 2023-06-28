import s from "./productList.module.css";
import boat from "../../images/products/boat.png";
import bullNosedFoam from "../../images/products/bullNosedFoam.png";
import caravanCushion from "../../images/products/caravanCushion.png";
import circles from "../../images/products/circles.png";
import clippedBolster from "../../images/products/clippedBolster.png";
import clippedWindowSeat from "../../images/products/clippedWindowSeat.png";
import curvedSofaCushion from "../../images/products/curvedSofaCushion.png";
import cushion from "../../images/products/cushion.png";
import equalSidedTapers from "../../images/products/equalSidedTapers.png";
import foamCube from "../../images/products/foamCube.png";
import foamEquilateralTriangles from "../../images/products/foamEquilateralTriangles.png";
import foamRoundTops from "../../images/products/foamRoundTops.png";
import foamWedges from "../../images/products/foamWedges.png";
import foamWedgeSeats from "../../images/products/foamWedgeSeats.png";
import lShaped from "../../images/products/lShaped.png";
import lShapedCurved from "../../images/products/lShapedCurved.png";
import semiCircle from "../../images/products/semiCircle.png";
import star from "../../images/products/star.png";
import trapeziumShaped from "../../images/products/trapeziumShaped.png";
import trapezoid from "../../images/products/trapezoid.png";
import tShaped from "../../images/products/tShaped.png";
import tShapedCurved from "../../images/products/tShapedCurved.png";
import wedGe from "../../images/products/wedGe.png";

const items = [
  { id: 1, image: cushion, name: "Sofa Cushion Foam Cut to Size" },
  { id: 2, image: star, name: "Custom Shape – Post Template" },
  { id: 3, image: circles, name: "Foam Circles & Cylinders Cut To Size" },
  { id: 4, image: semiCircle, name: "Foam Semi-Circle Cut to Size" },
  { id: 5, image: wedGe, name: "Foam Wedge Backs Cut to Size" },
  { id: 6, image: boat, name: "Boat Mattress Cushion Foam Cut to Size" },
  { id: 7, image: trapezoid, name: "5 Sided Trapezoid Foam Cut to Size" },
  {
    id: 8,
    image: clippedBolster,
    name: "Foam Clipped Bolster Shapes Cut to size",
  },
  {
    id: 9,
    image: clippedWindowSeat,
    name: "Foam Clipped Window Seat Shape Cut to Size",
  },
  { id: 10, image: lShaped, name: "L-Shaped Foam Cut to Size" },
  { id: 11, image: tShaped, name: "T-Shaped Foam Cut to Size" },
  { id: 12, image: lShapedCurved, name: "L-Shaped Curved Foam Cut to Size" },
  { id: 13, image: tShapedCurved, name: "T-Shaped Curved Foam Cut to Size" },
  { id: 14, image: caravanCushion, name: "Caravan Cushion Foam Cut to Size" },
  { id: 15, image: foamWedgeSeats, name: "Foam Wedge Seats Cut to Size" },
  { id: 16, image: equalSidedTapers, name: "Equal Sided Tapers Cut to Size" },
  {
    id: 17,
    image: trapeziumShaped,
    name: "Trapezium-Shaped Foam Cut to Size",
  },
  { id: 18, image: foamRoundTops, name: "Foam Round-Tops Cut to Size" },
  {
    id: 19,
    image: foamEquilateralTriangles,
    name: "Foam Equilateral Triangles Cut to Size",
  },
  { id: 20, image: foamWedges, name: "Foam Wedges Cut to Size" },
  { id: 21, image: foamCube, name: "Foam Cube Cut to Size" },
  { id: 22, image: bullNosedFoam, name: "Bull Nosed Foam Cut to Size" },
  {
    id: 23,
    image: curvedSofaCushion,
    name: "Curved Sofa Cushion Foam Cut to Size",
  },
];

export default function ProductList() {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {items.map(({ image, id, name }) => (
          <li className={s.item} key={id}>
            <div className={s.imgWrapper}>
              <img className={s.image} src={image} alt={name} />
            </div>
            <p className={s.name}>{name}</p>
            <p>Select options</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
