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
		"content": `<style>.f1wp-lwog {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 9v11.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6q-2.25 0-2.25-2.25v-1q0-2.25 2.25-2.25h.326q-.076-.337-.076-.75v-1q0-2.25 2.25-2.25h2q2.25 0 2.25 2.25v1q0 .413-.076.75h.326q2.25 0 2.25 2.25v1q0 2.25-2.25 2.25h6q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V9q0-.099-.025-.194t-.075-.181t-.119-.155q-.07-.07-.155-.119l-9.5-5.5q-.086-.05-.181-.075q-.096-.026-.195-.026t-.195.026t-.181.075l-9.5 5.5q-.085.049-.155.119t-.119.155q-.049.086-.075.181T1.75 9m8.75 12.25q.951 0 1.5-.402q.549.402 1.5.402z");
}
</style><path class="f1wp-lwog"/>`,
		"fallback": "uix-solid:wholesale-market",
	});
}

export default Component;
