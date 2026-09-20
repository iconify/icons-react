import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3tpdrb6a.css';
import '../../css/t/tt7xj_b0r.css';

const viewBox = {"width":98,"height":90};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGjLWOBdJI" viewBox="0 0 98 90"><path class="z3tpdrb6a"/><path class="tt7xj_b0r"/></symbol></defs><use width="98" height="90" href="#SVGjLWOBdJI"/>`,
		"fallback": "thesvg-color:zapal",
	});
}

export default Component;
