import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9a067bgy.css';

const viewBox = {"width":550,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9a067bgy"/>`,
		"fallback": "ls:yapcasialogomark",
	});
}

export default Component;
