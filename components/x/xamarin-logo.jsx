import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6av6r76k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6av6r76k"/>`,
		"fallback": "fluent-mdl2:xamarin-logo",
	});
}

export default Component;
