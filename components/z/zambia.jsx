import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1zaul45c.css';
import '../../css/b/bz4uy7g-m.css';
import '../../css/y/y_smit_jj.css';
import '../../css/h/hd9q669kx.css';
import '../../css/g/gdb3h0h5s.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1zaul45c"/><path class="bz4uy7g-m"/><path class="y_smit_jj"/><path class="hd9q669kx"/><path class="gdb3h0h5s"/>`,
		"fallback": "tabler-flags:zambia",
	});
}

export default Component;
