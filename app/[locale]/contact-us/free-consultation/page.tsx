import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function FreeConsultationPage() {
  return (
    <>
      <div className="container glassy-card rounded-2xl mt-6 grid grid-cols-3 gap-6 p-6">
        <div className="size-96 bg-background rounded-2xl"></div>
        <div className="col-span-2">
          <h1 className="text-5xl font-morabba-bold">مشاوره رایگان</h1>
          <p className="mt-6">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <Input placeholder="نام" />
            <Input placeholder="نام خانوادگی" />
            <Input
              placeholder="+98 *** *** ****"
              dir="ltr"
            />
            <Input
              placeholder="Email آدرس"
              dir="ltr"
            />
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div className="mt-3">
              <p className="font-yekan-bakh-bold">چه ساعتی با شما تماس بگیریم؟</p>
              <RadioGroup
                className="grid-cols-3 gap-6 mt-3"
                defaultValue="r2">
                <div className="f-align justify-end gap-3">
                  <RadioGroupItem
                    value="r1"
                    id="r1"
                  />
                  <Label htmlFor="r1">۷ الی ۳</Label>
                </div>
                <div className="f-align justify-end gap-3">
                  <RadioGroupItem
                    value="r2"
                    id="r2"
                  />
                  <Label htmlFor="r2">۱۳ الی ۱۹</Label>
                </div>
                <div className="f-align justify-end gap-3">
                  <RadioGroupItem
                    value="r3"
                    id="r3"
                  />
                  <Label htmlFor="r3">۱۹ الی ۲۲</Label>
                </div>
              </RadioGroup>
            </div>
            <Button>ثبت درخواست</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeConsultationPage;
