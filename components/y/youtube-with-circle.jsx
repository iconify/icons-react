import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5i-kqbtq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5i-kqbtq"/>`,
		"fallback": "entypo-social:youtube-with-circle",
	});
}

export default Component;
