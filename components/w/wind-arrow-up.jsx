import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m53xum0-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m53xum0-t"/>`,
		"fallback": "lucide:wind-arrow-up",
	});
}

export default Component;
