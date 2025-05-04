import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold inline-block">21st.dev</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <span className="text-muted-foreground">ExploreAPI</span>
          <span className="text-muted-foreground">Magic MCP</span>
          <span className="text-muted-foreground">4.3k</span>
        </nav>
      </div>
    </header>
  )
}