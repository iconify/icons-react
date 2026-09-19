import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw1ek4bdx.css';
import '../../css/o/onak4teku.css';
import '../../css/l/lk6hvcojf.css';
import '../../css/a/arcoz4z5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dw1ek4bdx"/><path class="onak4teku"/><path class="lk6hvcojf"/><path class="arcoz4z5j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-mage",
	});
}

export default Component;
