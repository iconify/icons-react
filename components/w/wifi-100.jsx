import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw6guzb1a.css';
import '../../css/y/y2u9_ob2n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGGOv5rcfr" class="tw6guzb1a"/></defs><g clip-rule="evenodd" class="y2u9_ob2n"><use href="#SVGGOv5rcfr"/><use href="#SVGGOv5rcfr"/></g>`,
		"fallback": "glyphs-poly:wifi-100",
	});
}

export default Component;
