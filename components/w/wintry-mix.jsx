import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lga8dlbkm.css';
import '../../css/x/x9stnobdg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lga8dlbkm"/><path class="x9stnobdg"/>`,
		"fallback": "carbon:wintry-mix",
	});
}

export default Component;
