import { cookies } from "next/headers"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const cookiesList = cookies()

  return <>hi</>
}
