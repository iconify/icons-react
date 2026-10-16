import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eic0a8bvd.css';
import '../../css/g/g1il7ubyg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eic0a8bvd"/><path class="g1il7ubyg"/>`,
		"fallback": "energy-icons:wrap-text-20",
	});
}

export default Component;
