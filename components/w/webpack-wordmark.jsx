import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mft8bat.css';
import '../../css/f/fr5171a8g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mft8bat"/><path class="fr5171a8g"/>`,
		"fallback": "devicon:webpack-wordmark",
	});
}

export default Component;
