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
		"content": `<style>.ycsv0ibyy {
  fill: currentColor;
  d: path("M11.192 20.708L6.485 16H1.692v-1H6.9l4.123 4.137l.02-.02q.21-.211.24-.49t-.106-.548L9.875 15.5h9.933q.212 0 .356.144t.144.357t-.144.356t-.356.143H11.51l.534 1.07q.348.701.205 1.456t-.683 1.295zM1.692 9V8h4.292l1.293-1.298q.344-.341.79-.521Q8.512 6 8.998 6h9.81q.212 0 .356.144t.144.357t-.144.356t-.356.143H8.883q-.235 0-.44.088q-.206.087-.376.25L6.4 9zm12.616 4.327v-1h7.5q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-3.154v-1h6.5q.212 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="ycsv0ibyy"/>`,
		"fallback": "material-symbols-light:wrist-outline",
	});
}

export default Component;
