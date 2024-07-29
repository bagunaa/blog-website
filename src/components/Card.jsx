import { useState } from "react";
import { Tag } from "./Tag";
import { Header } from "./Header";
const firstImage =
  "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gUrT8bOmxBsOcf1d-TlAK-3XMy1KqzU8~yZv7KptQSdolnoVynbyVxw~YpYy2bNmtTJ5F1k~9yPtxdDQyFssbKLhOaE7OvtTDGZuNpwCJb4aI1RZKnBRTwqndwEQCIALW0gBLNIgD0Le2bIo~c2Nk8yWtXkJFCO2BIVOH4JncHxEFtHDNS4XJ6O~EUnBZWekxyaixJ9I7lmQmMnLVuO0tO85HktNLPl0DvUzegDJertyN4YbaazuEvysLxB1-MEMZ1pqXsuLAzfU~pFmPRFZ1tamM3aNAvO32vjLo2OjDIUQ2FATffguuEccei0IvXfQwGahithoKl~HyXxhn14ltA__";
const secondImage =
  "https://s3-alpha-sig.figma.com/img/21a4/f878/0943144e7126909a96868bd7542caf21?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oITzs8skbrFWBZnb65l1DyE5mJwXDRMe8S7tpbD9qtfcv-azYNzN2ymSBk7a-dWlwbNZXdGHXi0DLMTo~N-QdRwrqcLfNg71I9rQmc4m0eElEiEu~fYdvv0JSv8ZYPGrLZorI8rT-ZSNn5QOJDY~3fusVyZ3xfeAsMaR4WbD01FcvS36knzLA-2zwvH9scndRjWg0YYOrBL7isSZNGjVWy75ULzHDs2Bqqji0S5o4PnK7LdREDl06F6LAd9WpVXsUNZnVce-ytjoAmRENJOjRTimqvIk2LoyKS5TBx15xy34H5JllqeYPowblq5FQCDGngolagx2MbQnHGcxbsd-mg__";
const thirdImage =
  "https://s3-alpha-sig.figma.com/img/a7b0/86f2/c97b173ebc05fa8f9660788e8e0971b9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQuI-gC7uG2eNsq~x1NuIOFo67weVFz3JL7Be2e7YvjhPKxHIqxq2vasX76A1JbKYMTBQmhnhqm-vHON6ryPlZa8I22hp~RJmgto4nGSQhgPjeGTXgBVEutQgpjVBNkmm4ATus9w58sAtdCkv4vETy3v5HfW3xhE2BhsSNeMHT8ZlFW-NhXlCtRzbMBqE74-mn8lfaDDbasnb~kVWeVR~Vf2jKk7eC9Bqwv8ExEmazmhf9BhqnY5WvJUUVzUoaAg9fF6Ch2cGAA-f90Cvk-ZsLULYwaFzOjChROHAzTitR~1LanFwMHPrTvR6Cs2pUx23V2R4IbItOc~XN8ytYnZDw__";
const fourthImage =
  "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqZC7HxV2g3YdVgC90BOnvTI2czdE~UFJQtIellvU5X17djQeFiNx3BELykwBL1RRZ11nYJi4UsaJCT7Lx5r5QZ0oZnsK~P5BW4tRviCM7T0bzQWD9-CwYin~N-FPWE2Ih~3S6a8mrX6DHfmMnIao9sBUud3m70WwPmHxkrVweBhc2PgiRj~116ClEC517qutvLWa~uec7tYoUIyDG7kl16h5sbwlc4f~JTTGIa9G-RPTAPUSlQO~JvrZGjqqo7UIr9bdvC4Dpqe6FBe-CFguoBklfHvcykzkYd98qqEIYcf69mBoMHMQ~AnD4K-cfKmAxMOiiIFLbjJJvu16kkVkQ__";
export const Card = (image, tag, title) => {
  const [datas, setData] = useState([
    {
      image: firstImage,
      tag: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: secondImage,
      tag: "Developer",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: thirdImage,
      tag: "Companies",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
    {
      image: fourthImage,
      tag: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
    },
  ]);
  return (
    <>
      <Header text="Trending" />
      <div className="flex items-start gap-[20px]">
        {datas.map((data) => {
          return (
            <>
              <div className="flex flex-col justify-end max-w-[293px] min-h-[320px] relative rounded-xl bg-opacity-40 bg-[#141624]">
                <img
                  className="absolute top-0 left-0 max-w-[293px] min-h-[320px] -z-[1] rounded-xl"
                  alt="card-Image"
                  src={data.image}
                />
                <div className="px-[31.5px] pb-[20px] flex flex-col gap-4">
                  <Tag text={data.tag} />
                  <h3 className="text-md text-white font-semibold leading-7 font-sans">
                    {data.title}
                  </h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
