"use client";
import stackData from "@/utils/iconLoader";
import Image from "next/image";
import "../styles/containerImage.css";

export const ContainerImage = () => {
  function Render() {
    return (
      <>
        {Array.from({ length: 23 }, (_, i) => i + 1).map((elem) => (
          <div className="flex" key={elem}>
            {Array.from({ length: 8 }, (_, i) => i + 1).map(() =>
              stackData?.map((elem) =>
                typeof elem.img === "string" ? (
                  <Image
                    src={elem.img}
                    alt={elem.title}
                    key={elem.title}
                    className="drop-shadow-new-box select-none cursor-default"
                  />
                ) : (
                  <span key={elem.title}>
                    {elem.img({
                      size: 100,
                      className:
                        "text-red-950 hover:text-red-400 transition delay-150 hover:drop-shadow-new-box px-1.5 select-none cursor-default hover:delay-0",
                    })}
                  </span>
                )
              )
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <section>
      <div className="row ">{Render()}</div>
    </section>
  );
};
