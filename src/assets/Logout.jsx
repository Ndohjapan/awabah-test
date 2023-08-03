export default function Logout() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="24"
      height="24"
      className="text-green-950 group-hover:text-gray-500
      mr-5 flex-shrink-0 h-6 w-6"
    >
      <title>logout</title>
      <defs>
        <image
          width="64"
          height="64"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img1" x="0" y="2" />
    </svg>
  );
}
