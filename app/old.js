import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // ...بخش های دیگر کد ...

 return (
     <div className={styles.page}>
       <main className={styles.main}>
         <h1>راهکارهای جدید برای تامین انرژی پایدار با توجه به خرد اقلیمی سرزمینی ایران عزیز</h1>
         
         {/* متن و توضیحات شما ... */}
         <p className={styles.description}>
        ایرانیان برای هزاران سال توانستند تمدن‌های پیشرفته‌ای را در فلات خشک مرکزی ایران توسعه دهند.
        این امر با تکیه بر خرد اقلیمی ایران عزیز ممکن شده است. تلاش مردان و زنانی که با تاسیس نهادهای اجتماعی و نوآوری‌های فناورانه توانستند انرژی باد را در بادگیرها مهار کرده و یکی از بهترین سیستم‌های تهویه بشری را ایجاد کنند.
        توانستند با تلاش زیاد آب را در زیر زمین به طول کیلومترها به حرکت درآورند و باغ‌های بی‌نظیری را در دل کویر ایجاد کنند.
        حال در میانه کشاکش بحران‌های مدرنیته ایران امروز که خرد اقلیمی به کل به دست فراموشی سپرده شده و سوء مدیریتی‌های بسیاری زیست‌پذیری نگین درخشنده بشریت را دچار اختلال کرده، بر آن شدیم که با توجه به نیاز امروزه تهویه در مکان‌های بسیاری از اتومبیل تا سازه‌های مسکونی، تجاری و صنعتی، بنیانی فناورانه و پایدار بسازیم و راه حل‌های نوینی ایجاد کنیم تا از مصرف بیش از اندازه برق و آب جلوگیری کنیم.
        باشد که این فناوری برای سال‌ها آسایش باشندگان این مملکت را فراهم آورد.
      </p>
         {/* کانتینر تصاویر */}
         
         <div className={styles.gallery}>
  {[
    { src: "/images/ghanat.jpg", alt: "قنات ایرانی" },
    { src: "/images/badgir.jpg", alt: "بادگیر ایرانی" },
    { src: "/images/yakhchal.jpg", alt: "یخچال خشتی" },
    { src: "/images/shoshtat.jpg", alt: "سازه‌های آبی شوشتر" },
    { src: "/images/aasbad.jpg", alt: "آسیاب بادی ایرانی" },
  ].map((image, index) => (
    <div className={styles.imageContainer} key={index}>
      <Image
        src={image.src}
        alt={image.alt}
        width={280}
        height={420}
      />
      <div className={styles.imageText}>{image.alt}</div>
    </div>
  ))}
</div>

<div class="infoBox">
  <h2 class="infoTitle">
    برزویه تجهیز پیشرو در تولید فناوری پایدار.سیستم تبرید خورشیدی 
    </h2>
  <div class="infoContent">
    <img src="/images/soloshen.jpg" alt="راه حل پایدار.محصول برزویه تجهیز"  className={styles.infoImage} />
    <p class="infoText">
     راه حلی ارزان و کارآمد برای مشکل دیرینه تهویه مطبوع.مصرف آب بسیار کم، مصرف برق بسیار کم و متکی به انرژِی خورشیدی.با افزایش دمای هوا راندمان این فناوری افزایش می یابد. 
    </p>
  </div>
</div>






        <ol>
          <li>
            Get started by editing <code>app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
