import { SocialMedia } from "../SocialMedia";

export const Footer = () => {
  return (
    <footer>
      <div>
        <SocialMedia align="center" />
      </div>
      <div className="bg-secondary-gray flex text-white">
        <div>
          <div>section 1</div>
          <div>section 2</div>
        </div>
        <div>
          <div>section 3</div>
        </div>
        <div>
          <div>section 4</div>
        </div>
        <div>
          <div>section 5</div>
        </div>
      </div>
    </footer>
  );
};
