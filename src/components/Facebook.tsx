const Facebook = ({ height, width }) => (
  <div className="fb-page"
        data-href="https://www.facebook.com/TaiwanCenter/"
        data-tabs="timeline"
        data-width={width.toString()}
        data-height={height}
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true">
          <blockquote
            cite="https://www.facebook.com/TaiwanCenter/"
            className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/TaiwanCenter/">
                北加州台灣會館 Taiwanese American Center of Northern California
              </a>
          </blockquote>
      </div>
);

export default Facebook;