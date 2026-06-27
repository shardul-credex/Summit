const stars = [
  {
    top: "10%",
    right: "0%",
    delay: "0s",
    duration: "8s",
  },
  {
    top: "5%",
    right: "15%",
    delay: "2s",
    duration: "9s",
  },
  {
    top: "18%",
    right: "35%",
    delay: "4s",
    duration: "10s",
  },
  {
    top: "0%",
    right: "55%",
    delay: "6s",
    duration: "7s",
  },
  {
    top: "12%",
    right: "75%",
    delay: "8s",
    duration: "11s",
  },
  {
    top: "4%",
    right: "90%",
    delay: "10s",
    duration: "8.5s",
  },
];

export default function ShootingStars() {
  return (
    <>
      {stars.map((star, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: star.top,
            right: star.right,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </>
  );
}
