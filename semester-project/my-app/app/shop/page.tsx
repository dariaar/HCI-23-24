import Link from "next/link"

function ShopPage() {
    return (
        <div>
            <h1>Hello</h1>
            <li><Link href="/shop/shop-all">Shop All</Link ></li>
            <li><Link href="/shop/face">Shop Face</Link ></li>
            <li><Link href="/shop/body">Shop Body</Link ></li>
            <li><Link href="/shop/hair">Shop Hair</Link ></li>
        </div>
    );
}

export default ShopPage;