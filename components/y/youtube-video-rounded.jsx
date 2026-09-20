import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h9f_e-_7v {
  fill: currentColor;
  d: path("M12 19q-1.775 0-3.325-.05q-1.325-.05-2.613-.137T4.2 18.575q-.65-.175-1.125-.65t-.65-1.125q-.15-.575-.237-1.4t-.138-1.575Q2 12.925 2 12t.05-1.825q.05-.75.138-1.575t.237-1.4q.175-.65.65-1.125t1.125-.65q.575-.15 1.863-.237t2.612-.138Q10.225 5 12 5l1 .013q1 .012 2.313.05t2.612.125t1.875.237q.65.175 1.125.65t.65 1.125q.15.575.238 1.4t.137 1.575q.05.9.05 1.825t-.05 1.825q-.05.75-.137 1.575t-.238 1.4q-.175.65-.65 1.125t-1.125.65q-.575.15-1.875.237t-2.613.125t-2.312.05zm2.45-7.425l-3.7-2.15q-.25-.15-.5.012t-.25.438v4.25q0 .275.25.438t.5.012l3.7-2.15q.25-.15.25-.425t-.25-.425");
}
</style><path class="h9f_e-_7v"/>`,
		"fallback": "material-symbols:youtube-video-rounded",
	});
}

export default Component;
