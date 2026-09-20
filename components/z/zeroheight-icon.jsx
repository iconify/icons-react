import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":263};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n_d5cxbuz {
  fill: var(--svg-color--ff4852, #ff4852);
  d: path("M174.188 148.86c31.699 0 57.396 25.525 57.396 57.013c0 31.487-25.697 57.012-57.396 57.012c-31.697 0-57.395-25.525-57.395-57.012s25.698-57.013 57.395-57.013M15.838 0L130.39 7.518l-7.57 113.727l-8.327 113.74L0 226.695c4.509-61.436 57.234-107.949 118.711-105.664L8.27 113.788zm127.853 49.91L256 73.546L119.895 161.47z");
}
</style><path class="n_d5cxbuz"/>`,
		"fallback": "logos:zeroheight-icon",
	});
}

export default Component;
