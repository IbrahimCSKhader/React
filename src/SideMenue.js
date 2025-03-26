import TagButton from "./tagButton";
import butterImg from "./photo2.jpg";

export default function SideMenue() {
  return (
    <div
      className={"containerTag"}
      style={{ margin: "25px", border: "solid teal 5px" }}
    >
      <TagButton value="New">
        <img src={butterImg} alt="Butter" />
      </TagButton>
      <TagButton value="Popular"></TagButton>
      <TagButton value="Trending"></TagButton>
      <TagButton value="Hot"></TagButton>
      <TagButton value="Latest"></TagButton>
      <TagButton value="Featured"></TagButton>
      <TagButton value="Top"></TagButton>
      <TagButton value="Exclusive"></TagButton>
    </div>
  );
}
