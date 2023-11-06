import Link  from "next/link"

function CollectionsPage() {
    return (
        <div>
            <h1>Collections</h1>
            <li><Link href="/collections/acne">Acne Prone Skin</Link ></li>
            <li><Link href="/collections/anti-aging">Anti-aging</Link ></li>
            <li><Link href="/collections/sensitive">Sensitive Skin</Link ></li>
        </div>
    );
}

export default CollectionsPage;