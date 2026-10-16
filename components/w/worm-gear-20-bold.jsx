import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bryv9-bhw.css';
import '../../css/k/kb7fl3kua.css';
import '../../css/g/gd-r2cbpj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bryv9-bhw"/><path class="kb7fl3kua"/><path class="gd-r2cbpj"/>`,
		"fallback": "energy-icons:worm-gear-20-bold",
	});
}

export default Component;
