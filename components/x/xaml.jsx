import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aef3ixbes.css';
import '../../css/c/c2c3p-b5s.css';
import '../../css/z/zm33ygepl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aef3ixbes"/><path class="c2c3p-b5s"/><path class="zm33ygepl"/>`,
		"fallback": "material-icon-theme:xaml",
	});
}

export default Component;
