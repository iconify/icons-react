import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pt72orbxr.css';
import '../../css/y/y6z1gibnd.css';

const viewBox = {"width":141,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="pt72orbxr"/><path class="y6z1gibnd"/></g>`,
		"fallback": "thesvg-color:yandex-taxi",
	});
}

export default Component;
