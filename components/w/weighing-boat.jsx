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
		"content": `<style>.u011kho8s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.5 7.25h-19q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141Q1.75 7.926 1.75 8t.014.146t.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.465l2.576 7.494q.019.055.046.106q.027.052.062.099q.035.046.076.087q.042.041.089.074q.048.034.1.06q.052.027.107.044q.056.018.113.027q.058.009.116.009h9.5q.058 0 .116-.009q.057-.009.113-.027q.055-.017.107-.044t.1-.06q.047-.033.089-.074t.076-.087t.062-.099q.027-.051.046-.106l2.576-7.494H21.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141T22.25 8t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014M5.551 8.75h12.898l-2.234 6.5h-8.43z");
}
</style><path class="u011kho8s"/>`,
		"fallback": "uix-solid:weighing-boat",
	});
}

export default Component;
