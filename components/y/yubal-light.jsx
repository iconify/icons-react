import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jokm5q72l.css';
import '../../css/u/uf6zebb2f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jokm5q72l"/><path class="uf6zebb2f"/>`,
		"fallback": "selfhst:yubal-light",
	});
}

export default Component;
