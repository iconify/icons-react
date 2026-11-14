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
		"content": `<style>.cepkifbpf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 21.75q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.75 21q0-2.212.566-5.304q.434-2.372.434-3.696q0-2.142-1.468-4.684Q6.25 5.529 6.25 4.5V3q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q6.926 2.25 7 2.25h10q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v1.5q0 1.029-1.032 2.816Q15.25 9.858 15.25 12q0 1.324.434 3.696q.566 3.092.566 5.304q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014z");
}
</style><path class="cepkifbpf"/>`,
		"fallback": "uix-solid:weizen-glass",
	});
}

export default Component;
