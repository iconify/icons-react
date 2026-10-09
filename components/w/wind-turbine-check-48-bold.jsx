import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0gei6bou.css';
import '../../css/d/dztgh4bcl.css';
import '../../css/b/b1sfwsxyj.css';
import '../../css/a/alivzijug.css';
import '../../css/c/c4tbdll5w.css';
import '../../css/z/zs372kprb.css';
import '../../css/l/l338p9bqe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0gei6bou"/><path class="dztgh4bcl"/><path class="b1sfwsxyj"/><path class="alivzijug"/><path class="c4tbdll5w"/><path class="zs372kprb"/><path class="l338p9bqe"/>`,
		"fallback": "energy-icons:wind-turbine-check-48-bold",
	});
}

export default Component;
