import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3vsjgjyn.css';
import '../../css/y/y8hjambyu.css';
import '../../css/b/b4uzkcb4k.css';
import '../../css/o/o9xzmfo0o.css';
import '../../css/l/le910wibb.css';
import '../../css/i/ilob659su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k3vsjgjyn"/><path clip-rule="evenodd" class="y8hjambyu"/><circle class="b4uzkcb4k"/><circle class="o9xzmfo0o"/><circle class="le910wibb"/><path class="ilob659su"/></g>`,
		"fallback": "andrsrxn:wheel",
	});
}

export default Component;
