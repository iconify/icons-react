import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvk2mbcwh.css';
import '../../css/e/egyf9jbvi.css';
import '../../css/g/gs45f_bze.css';
import '../../css/i/icly_ob1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvk2mbcwh"/><path class="egyf9jbvi"/><path class="gs45f_bze"/><path class="icly_ob1r"/>`,
		"fallback": "withicons-bauhaus:wifi",
	});
}

export default Component;
