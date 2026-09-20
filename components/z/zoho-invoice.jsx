import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bu7irkb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.762 16.027h5.261v21.046a5.264 5.264 0 0 1-5.261 5.262A5.264 5.264 0 0 1 5.5 37.073V21.288a5.264 5.264 0 0 1 5.262-5.261M5.5 25.391h10.523m6.414 0h13.361m-13.361 6.786h13.361M22.437 13.315h5.838v5.838h-5.838z");
}

.nwbv2aboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.762 42.335h21.215c5.812 0 10.523-4.712 10.523-10.523V5.665H21.292a5.26 5.26 0 0 0-5.262 5.262l-.007 5.1");
}
</style><path class="nwbv2aboq"/><path class="bu7irkb_w"/>`,
		"fallback": "arcticons:zoho-invoice",
	});
}

export default Component;
