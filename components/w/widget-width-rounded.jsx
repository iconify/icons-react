import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dmdwj7b_o {
  fill: currentColor;
  d: path("M3.808 8.077q-.343 0-.576-.232T3 7.269V3.808q0-.343.232-.576T3.808 3h16.384q.343 0 .576.232t.232.576v3.461q0 .344-.232.576t-.576.232zm0 12.923q-.343 0-.576-.232T3 20.192v-3.461q0-.344.232-.576t.576-.232h3.461q.344 0 .576.232t.232.576v3.461q0 .344-.232.576T7.269 21zm6.461 0q-.343 0-.575-.232t-.233-.576v-3.461q0-.344.233-.576t.575-.232h3.462q.343 0 .575.232t.233.576v3.461q0 .344-.233.576t-.575.232zm6.462 0q-.344 0-.576-.232t-.232-.576v-3.461q0-.344.232-.576t.576-.232h3.461q.344 0 .576.232t.232.576v3.461q0 .344-.232.576t-.576.232zM3.808 14.538q-.343 0-.576-.232T3 13.731v-3.462q0-.343.232-.575t.576-.233h3.461q.344 0 .576.233t.232.575v3.462q0 .343-.232.575t-.576.233zm6.461 0q-.343 0-.575-.232t-.233-.575v-3.462q0-.343.233-.575t.575-.233h3.462q.343 0 .575.233t.233.575v3.462q0 .343-.233.575t-.575.233zm6.462 0q-.344 0-.576-.232t-.232-.575v-3.462q0-.343.232-.575t.576-.233h3.461q.344 0 .576.233t.232.575v3.462q0 .343-.232.575t-.576.233z");
}
</style><path class="dmdwj7b_o"/>`,
		"fallback": "material-symbols-light:widget-width-rounded",
	});
}

export default Component;
