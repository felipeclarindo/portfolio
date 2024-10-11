import Link from "next/link";

function RedesSociais() {
  return (
    <ul>
      <li>
        <Link href="https://linkedin.com/in/felipeclarindo" target="_blank">
          <i></i>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/felipeclarindo" target="_blank">
          <i></i>
        </Link>
      </li>
      <li>
        <Link href="https://instagram.com/lipethecoder" target="_blank">
          <i></i>
        </Link>
      </li>
    </ul>
  );
}

export { RedesSociais };
