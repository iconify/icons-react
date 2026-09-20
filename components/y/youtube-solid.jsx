import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4uwgeb9s.css';
import '../../css/y/yo4ocac3c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4uwgeb9s"/><path clip-rule="evenodd" class="yo4ocac3c"/>`,
		"fallback": "teenyicons:youtube-solid",
	});
}

export default Component;
