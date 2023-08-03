export default function UserSettings() {
  return (
    <svg
      stroke="currentColor"
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64"
      height="64"
      className="text-green-950 group-hover:text-gray-500
      mr-5 flex-shrink-0 h-6 w-6"
      strokeWidth="1.5"
    >
      <title>profile</title>
      <defs>
        <image
          width="62"
          height="64"
          id="img3"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img3" x="0" y="0" />
    </svg>
  );
}