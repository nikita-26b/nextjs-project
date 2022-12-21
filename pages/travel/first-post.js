import Link from "next/link";
import Image from "next/image";

export default function FirstPost() {
  return (
    <div className="first-post">
      <div className="inner-box">
        <Image
          src="/travellor.avif"
          alt="travellor"
          width={350}
          height={390}
          className="travellor"
        />

        <div class="travel-des">
          <h1>TRAVEL + LEISURE</h1>
          <p>
            TRAVEL + LEISURE inspires and empowers the world’s most curious and
            passionate travelers to travel more–and travel better. We help
            elevate reader's experiences through content and tools that aid in
            the entire journey, from dreaming to planning to booking to
            traveling.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Enim facilisis gravida neque convallis. Duis tristique sollicitudin
            nibh sit amet. A scelerisque purus semper eget duis. Sit amet massa
            vitae tortor. Sed enim ut sem viverra aliquet eget sit. TRAVEL +
            LEISURE inspires and empowers the world’s most curious and
            passionate travelers to travel more–and travel better.{" "}
            <Link href="/">Back to home</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
