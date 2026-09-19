import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjvpa0utv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjvpa0utv"/>`,
		"fallback": "game-icons:wolverine-claws",
	});
}

export default Component;
