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
		"content": `<style>.li57dylxg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9 6.75q.186 0 .368.009q.368-.541.859-1.032Q12.204 3.75 15 3.75t4.773 1.977T21.75 10.5t-1.977 4.773T15 17.25q-.186 0-.368-.009q-.368.541-.859 1.032Q11.796 20.25 9 20.25t-4.773-1.977T2.25 13.5t1.977-4.773T9 6.75");
}
</style><path class="li57dylxg"/>`,
		"fallback": "uix-solid:wedding-rings",
	});
}

export default Component;
