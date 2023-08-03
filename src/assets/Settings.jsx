export default function Settings() {
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
      <title>settings</title>
      <defs>
        <image
          width="64"
          height="64"
          id="img2"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img2" x="0" y="0" />
    </svg>
  );
}