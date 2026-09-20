import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kat0mybba.css';
import '../../css/k/ky783tb7z.css';
import '../../css/v/vab1bkb9p.css';

const viewBox = {"width":294,"height":229};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kat0mybba"/><path class="ky783tb7z"/><path class="vab1bkb9p"/>`,
		"fallback": "thesvg-color:zeabur-dark",
	});
}

export default Component;
