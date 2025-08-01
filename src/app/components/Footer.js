import Image from "next/image";
import Link from "next/link";
const Footer = ({Footerdata , OptionDatas , Footer1 , Footer2}) => {
  return (
    <footer
      className="bg-cover"
      style={{ backgroundImage: `url(${OptionDatas.footer_background.url})` }}
    >
      <div className="container py-14 lg:py-20 2xl:py-100">
        <div className="grid gap-10 3xl:gap-20 sm:grid-cols-2 2xl:flex">
          <div className="shrink-0 sm:col-span-2 lg:col-span-3 xl:col-span-5 2xl:col-span-1">
            <Link role="link" href="/">
              <Image
                src={Footerdata.site_logo}
                alt="Logo"
                width={286}
                height={66}
              />
            </Link>
          </div>
          <div className="space-y-6">
            <div className="text-p *:font-bold">
              <p>{OptionDatas.footer_standorte_title}</p>
            </div>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <svg
                  className="shrink-0 mt-1"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_1515)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.04169 0.382888C6.60285 0.600365 5.35828 1.21504 4.31126 2.22532C3.3028 3.19841 2.66342 4.36085 2.37042 5.75388C2.24692 6.34096 2.21567 7.32699 2.30117 7.9374C2.63856 10.3462 4.36698 13.3816 7.25693 16.6403C7.4884 16.9014 7.9467 17.3878 8.2753 17.7214C8.83278 18.2872 8.8814 18.3278 9.00142 18.3278C9.12183 18.3278 9.17052 18.2866 9.75981 17.6862C11.8555 15.5511 13.6986 13.0485 14.7115 10.9626C15.4214 9.50066 15.748 8.27603 15.7495 7.07024C15.7517 5.29066 15.0996 3.68121 13.8527 2.38894C12.8799 1.38083 11.7208 0.743064 10.3241 0.44754C9.9595 0.370408 9.78551 0.355185 9.14078 0.34404C8.59431 0.334619 8.28982 0.345376 8.04169 0.382888ZM8.62708 4.02156C8.26908 4.06449 7.76185 4.23745 7.4357 4.42783C7.05872 4.64787 6.57019 5.1364 6.35015 5.51338C5.79535 6.46386 5.79099 7.65408 6.33879 8.622C6.52452 8.95018 6.9515 9.40549 7.28056 9.62627C8.11742 10.1878 9.19777 10.3065 10.1333 9.93987C10.7153 9.71181 11.3357 9.18109 11.6502 8.64229C12.2042 7.69317 12.2085 6.50018 11.6615 5.53366C11.4709 5.1969 11.0307 4.73182 10.6923 4.50963C10.1005 4.12112 9.32503 3.93789 8.62708 4.02156Z"
                      fill="#D6AB37"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1515">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.0947266)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  dangerouslySetInnerHTML={{
                    __html: OptionDatas.footer_location,
                  }}
                ></span>
              </li>
              <li>
                <Link
                  role="link"
                  className="flex gap-3 items-center"
                  href={OptionDatas.footer_telephone.url}
                >
                  <svg
                    className="shrink-0"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.47986 1.72415C3.77439 2.20376 2.0831 4.14958 1.43572 5.2265C1.2154 5.59294 1.20439 5.71247 1.33056 6.36622C2.13204 10.5195 6.41841 15.6492 11.0008 17.9392C12.3122 18.5945 13.6064 19.0143 14.4726 19.0653L14.7851 19.0837L15.0828 18.9069C15.8926 18.426 17.4875 17.1046 18.238 16.2927C19.0083 15.4596 18.9539 15.2675 17.7148 14.4424C16.6774 13.7517 15.3299 12.9701 14.7211 12.7061C13.9859 12.3872 13.9687 12.3954 12.9998 13.5308C12.7522 13.8208 12.5076 14.0968 12.4559 14.1442L12.3622 14.2302L12.0502 14.1386C11.5579 13.9942 11.2286 13.8588 10.7033 13.585C9.28689 12.8467 8.13724 11.822 7.27384 10.5284C6.87622 9.93259 6.45728 9.08997 6.25439 8.47782L6.0879 7.97564L6.17869 7.87677C6.22865 7.82239 6.50681 7.5754 6.79685 7.32786C7.73181 6.52997 7.84302 6.39384 7.79669 6.10407C7.74091 5.75509 7.19283 4.69083 6.4715 3.53079C5.2549 1.57427 5.01736 1.35876 4.47986 1.72415ZM10.625 2.19778V2.8179L10.747 2.84232C10.8142 2.85575 10.968 2.86681 11.0888 2.86689C11.2097 2.86696 11.4756 2.89384 11.6797 2.92657C14.0743 3.31083 16.0672 4.89583 16.9825 7.14407C17.253 7.80849 17.4601 8.72411 17.4607 9.25833C17.4608 9.36845 17.4719 9.51345 17.4853 9.5806L17.5097 9.70267H18.1299H18.75V9.39892C18.75 8.51474 18.4767 7.33872 18.0483 6.37907C17.2539 4.59962 15.7575 3.09466 13.9843 2.29181C13.043 1.8656 11.8111 1.57767 10.9287 1.57767H10.625V2.19778ZM10.625 5.32528V5.94786L10.8105 5.97071C11.5756 6.06485 11.9481 6.17122 12.4155 6.42892C13.3624 6.95095 14.0601 7.8897 14.274 8.92954C14.308 9.09513 14.3359 9.28189 14.3359 9.34458C14.3359 9.40724 14.3469 9.51345 14.3603 9.5806L14.3847 9.70267H15.0049H15.625V9.45388C15.625 8.92185 15.3963 8.03208 15.115 7.46942C14.6528 6.54517 13.7825 5.67482 12.8582 5.21267C12.2956 4.93134 11.4058 4.70267 10.8738 4.70267H10.625V5.32528Z"
                      fill="#D6AB37"
                    />
                  </svg>
                  <span>{OptionDatas.footer_telephone.title}</span>
                </Link>
              </li>
              <li>
                <Link
                  role="link"
                  className="flex gap-3"
                  href={OptionDatas.footer_mail.url}
                >
                  <svg
                    className="shrink-0 sm:mt-1 mt-[2px]"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.30859 3.34113C1.24414 3.3623 1.15059 3.39629 1.1007 3.41664C1.01645 3.45097 1.31605 3.76168 5.29656 7.7675C7.76707 10.2537 9.63422 12.103 9.70367 12.1323C9.86539 12.2006 10.1876 12.1922 10.332 12.1159C10.4942 12.0303 18.9954 3.46418 18.9476 3.43461C18.7235 3.29613 18.7978 3.29726 9.98047 3.3C4.47383 3.30172 1.38402 3.31637 1.30859 3.34113ZM0.125273 4.38047C0.103047 4.43957 0.0657422 4.54765 0.0424219 4.62066C0.0127344 4.71363 0 6.42492 0 10.326C0 15.8769 0.000312496 15.8995 0.0817188 16.1405C0.126641 16.2736 0.175 16.3823 0.189141 16.3821C0.203281 16.382 1.56543 15.0196 3.21609 13.3548L6.21738 10.3277L3.21609 7.30058C1.56543 5.63566 0.203789 4.27336 0.190273 4.27324C0.176797 4.27312 0.147539 4.32137 0.125273 4.38047ZM16.783 7.30226L13.7809 10.3278L16.778 13.3454C18.4265 15.005 19.7888 16.3681 19.8053 16.3745C19.8218 16.3809 19.8724 16.2764 19.9177 16.1423C19.9999 15.8989 20 15.8903 20 10.3277C20 4.77863 19.9997 4.75601 19.9183 4.515C19.8734 4.38191 19.825 4.27387 19.8109 4.27488C19.7967 4.2759 18.4342 5.6382 16.783 7.30226ZM4.01098 14.1757C2.13758 16.0605 1.02723 17.2053 1.05547 17.2227C1.27352 17.3575 1.30973 17.358 10 17.358C17.2622 17.358 18.5267 17.3499 18.707 17.3019C18.823 17.2711 18.9312 17.2317 18.9475 17.2145C18.9639 17.1973 17.624 15.8227 15.97 14.1598L12.9629 11.1365L12.0186 12.0756C11.0234 13.0652 10.9029 13.1571 10.4417 13.2773C10.0191 13.3873 9.57363 13.3366 9.16016 13.1312C8.97148 13.0376 8.74273 12.8328 7.98727 12.0815C7.47105 11.5681 7.04039 11.15 7.03023 11.1523C7.02004 11.1547 5.66137 12.5152 4.01098 14.1757Z"
                      fill="#D6AB37"
                    />
                  </svg>
                  <span>{OptionDatas.footer_mail.title}</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 shrink-0">
            <div className="text-p *:font-bold">
              <p>{OptionDatas.sprechzeiten_title}</p>
            </div>
            <div className="flex gap-2">
              <ul className="space-y-5">
                {OptionDatas.footer_offie_hours.map((day, i) => {
                  return <li key={i}>{day.footer_day_name}</li>;
                })}
              </ul>
              <ul className="space-y-5">
                {OptionDatas.footer_offie_hours.map((day, i) => {
                  return <li key={i}>{day.footer_day_hours}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="space-y-6 links">
            <div className="text-p *:font-bold">
              <p>{OptionDatas.footer_navigation_title}</p>
            </div>
            <ul className="space-y-5">
              {Footer1 &&
                Footer1?.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link role="link" className="link" href={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="space-y-6 links">
            <div className="text-p *:font-bold">
              <p>{OptionDatas.footer_rechtliches_title}</p>
            </div>
            <ul className="space-y-5">
              {Footer2 && 
              Footer2?.map((item, i) => (
                <li key={i}>
                  <Link role="link" className="link" href={item.url}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 shrink-0">
            {OptionDatas.footer_certificates_links.map((image, i) => (
              <Link
                role="link"
                href={image.footer_certificates_link}
                className="block"
                key={i}
              >
                <Image
                  role="img"
                  width={150}
                  height={151}
                  src={image.footer_certificates_image.url}
                  className="rounded-[10px]"
                  alt="Footer logo"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid font-semibold text-white bg-yellow text-center py-4">
        <p>
          &copy; <span id="currentYear">2025</span> {OptionDatas.copyright_text}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
