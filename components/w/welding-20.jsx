import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgad93s4w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgad93s4w"/>`,
		"fallback": "energy-icons:welding-20",
	});
}

export default Component;
